import validateUsername, * as users from "../src/app.js";

test('validateUsername test', () => {
    let correctSymbols = !validateUsername(users.wrongUser1) && !validateUsername(users.wrongUser2) && !validateUsername(users.wrongUser3);
    let correctStart = !validateUsername(users.wrongUser2) && !validateUsername(users.wrongUser3) && !validateUsername(users.wrongUser4);
    let correctEnd = !validateUsername(users.wrongUser5) && !validateUsername(users.wrongUser6) && !validateUsername(users.wrongUser7);
    let correctOrderOfNumbers = !validateUsername(users.wrongUser8) && !validateUsername(users.wrongUser9);

    expect(correctSymbols && correctStart && correctEnd && correctOrderOfNumbers).toBe(true);
})