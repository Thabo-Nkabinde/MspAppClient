import Api from '@/services/api'
import { LOAD_EXPENSE_TYPES, CREATE_EXPENSE_TYPE, EDIT_EXPENSE_TYPE, REMOVE_EXPENSE_TYPE, ADD_ALERT, REMOVE_EXPENSESOFTYPE, LOAD_CATEGORIES_BREAKDOWN, LOAD_EXPENSES_BREAKDOWN } from '@/store/_actiontypes'
import { SET_EXPENSE_TYPE, ADD_EXPENSE_TYPE, UPDATE_EXPENSE_TYPE, DELETE_EXPENSE_TYPE } from '@/store/_mutationtypes'

const state = {
    types: []
};

const actions = {
   
    
}

const mutations = {
    [SET_EXPENSE_TYPE](state, expenseTypes) {
        state.types = expenseTypes;
    },
    [ADD_EXPENSE_TYPE](state, expenseType) {
        state.types.push(expenseType);
    },
    [UPDATE_EXPENSE_TYPE](state, expenseType) {
        let expenseTypeUpdated = state.types.find(et => et.id == expenseType.id)
        expenseTypeUpdated.name = expenseType.name;
        expenseTypeUpdated.description = expenseType.description;
    },
    [DELETE_EXPENSE_TYPE](state, id) {
        state.types = state.types.filter(et => et.id != id)
    }
}

export const expenseTypes = {
    namespaced: true,
    state,
    actions,
    mutations
};