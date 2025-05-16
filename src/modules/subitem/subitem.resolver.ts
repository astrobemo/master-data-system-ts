import Decimal from "@graphql/decimal";
import DateScalar from "../../graphql/date.js";
import handleResolverError from "../../graphql/handleResolverError.js";
import { ResolverFn } from "../../graphql/types.js";
import { SubItemService } from "./subitem.service.js";
import { SubItem } from "./subitem.model.js";
import { Unit } from "@prisma/client";

const getSubItemByItemId: ResolverFn<
  null,
  { itemId: number },
  {},
  SubItem[]> = async (
    _,
    { itemId },
    {},
    ) => {
    return SubItemService.getSubItemByItemId(itemId);
}

export const subitemResolvers = {
    Decimal,
    Date: DateScalar,
    Query: {
        getSubItemByItemId: handleResolverError(getSubItemByItemId),
    },
}
