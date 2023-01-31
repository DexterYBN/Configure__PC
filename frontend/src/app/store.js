import { configureStore } from "@reduxjs/toolkit";
import categories from "../features/categoriesSlice";
import users from '../features/usersSlice';
import accessories from "../features/accessoriesSlice";
import assembles from '../features/assemblesSlice'
import configures from "../features/configuresSlice";
export const store = configureStore({
  reducer: {
    users,
    categories,
    accessories,
    assembles,
    configures
  },
});
