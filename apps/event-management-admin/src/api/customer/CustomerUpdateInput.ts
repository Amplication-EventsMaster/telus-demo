import { EventUpdateManyWithoutCustomersInput } from "./EventUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  eMail?: string | null;
  events?: EventUpdateManyWithoutCustomersInput;
  firstName?: string | null;
  lAstName?: string | null;
};
