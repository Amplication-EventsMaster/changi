import { Terminal as TTerminal } from "../api/terminal/Terminal";

export const TERMINAL_TITLE_FIELD = "name";

export const TerminalTitle = (record: TTerminal): string => {
  return record.name?.toString() || String(record.id);
};
