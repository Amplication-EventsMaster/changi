import { TerminalWhereInput } from "./TerminalWhereInput";
import { TerminalOrderByInput } from "./TerminalOrderByInput";

export type TerminalFindManyArgs = {
  where?: TerminalWhereInput;
  orderBy?: Array<TerminalOrderByInput>;
  skip?: number;
  take?: number;
};
