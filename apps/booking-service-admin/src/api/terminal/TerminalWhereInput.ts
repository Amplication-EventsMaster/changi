import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TerminalWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
