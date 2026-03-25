import { createContext, useState } from "react";

export const BudgetContext = createContext();

export function BudgetProvider({ children }) {

    const [budgetMode, setBudgetMode] = useState(false)
    const [budgetFilter, setBudgetFilter] = useState('')

    return (
        <BudgetContext.Provider
            value={{
                budgetMode,
                setBudgetMode,
                budgetFilter,
                setBudgetFilter
            }}
        >
            {children}
        </BudgetContext.Provider>
    )
}


