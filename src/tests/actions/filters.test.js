import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from "../../actions/filters"
import moment from 'moment';
test("should gen set start date action object", () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_START_DATE",
        startDate: moment(0)
    });
});

test("should gen set end date action object", () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: "SET_END_DATE",
        endDate: moment(0)
    })
});
test("should gen text filter action object", () => {
    const action = setTextFilter('abc');
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: 'abc'
    })
});
test("should gen text filter action object with default text", () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ''
    })
});
test("should gen sort by amount action object", () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: "SORT_BY_AMOUNT",
    })
});
test("should gen sort by date action object", () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: "SORT_BY_DATE",
    })
});
