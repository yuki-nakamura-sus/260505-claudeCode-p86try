"use client";

import { useState, useEffect } from "react";
import { Todo, FilterType } from "./types/todo";
import { Locale, translations } from "./i18n/translations";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import TodoFilter from "./components/TodoFilter";
import LanguageSwitcher from "./components/LanguageSwitcher";

const STORAGE_KEY = "todos";

function loadTodos(): Todo[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveTodos(todos: Todo[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterType>("all");
  const [locale, setLocale] = useState<Locale>("ja");
  const [mounted, setMounted] = useState(false);

  const t = translations[locale];

  useEffect(() => {
    setTodos(loadTodos());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) saveTodos(todos);
  }, [todos, mounted]);

  const addTodo = (text: string) => {
    setTodos((prev) => [
      { id: crypto.randomUUID(), text, completed: false, createdAt: Date.now() },
      ...prev,
    ]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const editTodo = (id: string, text: string) => {
    setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, text } : todo)));
  };

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((t) => !t.completed));
  };

  const filtered = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const activeCount = todos.filter((t) => !t.completed).length;
  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
          {t.title}
        </h1>

        <LanguageSwitcher current={locale} onChange={setLocale} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
          <TodoInput onAdd={addTodo} t={t} />

          <TodoFilter current={filter} onChange={setFilter} t={t} />

          {!mounted ? (
            <p className="text-center text-gray-400 py-8">{t.loading}</p>
          ) : filtered.length === 0 ? (
            <p className="text-center text-gray-400 dark:text-gray-500 py-8">
              {filter === "all" ? t.noTasks : t.noFiltered}
            </p>
          ) : (
            <ul className="flex flex-col gap-2 mb-4">
              {filtered.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                  onEdit={editTodo}
                  t={t}
                />
              ))}
            </ul>
          )}

          {todos.length > 0 && (
            <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t.itemsLeft(activeCount)}
              </p>
              {completedCount > 0 && (
                <button
                  onClick={clearCompleted}
                  className="text-sm text-red-500 hover:text-red-700 dark:hover:text-red-400 transition-colors"
                >
                  {t.clearCompleted} ({completedCount})
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
