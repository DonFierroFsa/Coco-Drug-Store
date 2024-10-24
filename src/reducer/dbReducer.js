import { Db_ACTIONS } from "./dbActions";

export function DbReducer(dbState, { type, payload }) {
  const {
    UPDATE_CASH_REGISTER,
    UPDATE_STOCK,
    UPDATE_USERS,
    UPDATE_DATAFORM,
    EDIT_DATAFORM,
    CLEAR_DATAFORM,
  } = Db_ACTIONS;

  switch (type) {
    case UPDATE_CASH_REGISTER: {
      return {
        ...dbState,
        cashRegisters: payload,
      };
      break;
    }

    case UPDATE_STOCK:
      {
        return {
          ...dbState,
          stock: payload,
        };
      }
      break;

    case UPDATE_USERS:
      {
        return {
          ...dbState,
          users: payload,
        };
      }
      break;

    //Form cases
    case UPDATE_DATAFORM:
      {
        switch (payload.name) {
          case "isInOffer":
            return {
              ...dbState,
              formData: {
                ...dbState.formData,
                [payload.name]: payload.checked,
              },
            };
            break;
          default:
            return {
              ...dbState,
              formData: {
                ...dbState.formData,
                [payload.name]: payload.value,
              },
            };
        }
      }
      break;
    case EDIT_DATAFORM:
      {
        return {
          ...dbState,
          formData: {
            ...payload,
          },
        };
      }
      break;
    case CLEAR_DATAFORM: {
      return {
        ...dbState,
        formData: {},
      };
    }

    default:
      dbState;
      break;
  }
}
