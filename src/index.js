import { createReducer } from "create-reducer"
import { set, lensProp } from "ramda"

export const types = {
    Begin: "transient/Begin",
    End: "transient/End",
}

export const actions = {
    begin: () => ({ type: types.Begin }),
    end: () => ({ type: types.End }),
}

const active = set(lensProp("active"))

export default createReducer({ active: false }, [
    [ types.Begin, () => active(true) ],
    [ types.End, () => active(false) ],
])
