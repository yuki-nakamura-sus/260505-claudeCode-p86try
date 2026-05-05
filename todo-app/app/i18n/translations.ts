export type Locale = "ja" | "en" | "fr" | "tr";

export interface T {
  title: string;
  placeholder: string;
  add: string;
  tabAll: string;
  tabActive: string;
  tabCompleted: string;
  clearCompleted: string;
  noTasks: string;
  noFiltered: string;
  itemsLeft: (n: number) => string;
  save: string;
  cancel: string;
  loading: string;
}

export const translations: Record<Locale, T> = {
  ja: {
    title: "TODOリスト",
    placeholder: "新しいタスクを入力...",
    add: "追加",
    tabAll: "すべて",
    tabActive: "未完了",
    tabCompleted: "完了済み",
    clearCompleted: "完了済みを削除",
    noTasks: "タスクがありません",
    noFiltered: "該当するタスクがありません",
    itemsLeft: (n) => `${n}件が未完了`,
    save: "保存",
    cancel: "キャンセル",
    loading: "読み込み中...",
  },
  en: {
    title: "TODO List",
    placeholder: "Add a new task...",
    add: "Add",
    tabAll: "All",
    tabActive: "Active",
    tabCompleted: "Completed",
    clearCompleted: "Clear completed",
    noTasks: "No tasks yet",
    noFiltered: "No tasks found",
    itemsLeft: (n) => `${n} item${n !== 1 ? "s" : ""} left`,
    save: "Save",
    cancel: "Cancel",
    loading: "Loading...",
  },
  fr: {
    title: "Liste de tâches",
    placeholder: "Ajouter une tâche...",
    add: "Ajouter",
    tabAll: "Toutes",
    tabActive: "Actives",
    tabCompleted: "Terminées",
    clearCompleted: "Supprimer terminées",
    noTasks: "Aucune tâche",
    noFiltered: "Aucune tâche trouvée",
    itemsLeft: (n) => `${n} tâche${n > 1 ? "s" : ""} restante${n > 1 ? "s" : ""}`,
    save: "Enregistrer",
    cancel: "Annuler",
    loading: "Chargement...",
  },
  tr: {
    title: "Yapılacaklar",
    placeholder: "Yeni görev ekle...",
    add: "Ekle",
    tabAll: "Tümü",
    tabActive: "Aktif",
    tabCompleted: "Tamamlandı",
    clearCompleted: "Tamamlananları sil",
    noTasks: "Görev yok",
    noFiltered: "Görev bulunamadı",
    itemsLeft: (n) => `${n} görev kaldı`,
    save: "Kaydet",
    cancel: "İptal",
    loading: "Yükleniyor...",
  },
};

export const localeLabels: Record<Locale, string> = {
  ja: "日本語",
  en: "English",
  fr: "Français",
  tr: "Türkçe",
};
