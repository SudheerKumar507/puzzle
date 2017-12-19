var capacity = [8, 5, 3];
// Maximum capacities of 3 jugs -> x,y,z

var x = capacity[0];
var y = capacity[1];
var z = capacity[2];
var ans = [];

function get_all_states(state) {

    // Let the 3 jugs be called a,b,c
    var a = state[0];
    var b = state[1];
    var c = state[2];

    if (a == 4 && b == 4) {
        ans.push(state)
        return true;
    }    

    //empty jug a
    if (a > 0) {
        //empty a into b
        if (a + b <= y) {
            if (get_all_states((0, a + b, c))) {
                ans.push(state)
                return true;
            } else
                if (get_all_states((a - (y - b), y, c))) {
                    ans.push(state)
                    return true;
                }
            //empty a into c
            if (a + c <= z) {
                if (get_all_states((0, b, a + c)))
                    ans.push(state)
                return true;
            }
            else
                if (get_all_states((a - (z - c), b, z))) {
                    ans.push(state)
                    return true;
                }
        }
    }
    //empty jug b
    if (b > 0) {
        //empty b into a
        if (a + b <= x) {
            if (get_all_states((a + b, 0, c))) {
                ans.push(state)
                return true;
            }
            else
                if (get_all_states((x, b - (x - a), c))) { }
            ans.push(state)
            return true;
        }
        //empty b into c
        if (b + c <= z) {
            if (get_all_states((a, 0, b + c))) {
                ans.push(state)
                return true;
            }
        }
        else {
            if (get_all_states((a, b - (z - c), z)))
                ans.push(state)
            return true;
        }
    }

    //empty jug c
    if (c > 0) {
        // empty c into a
        if (a + c <= x) {
            if (get_all_states((a + c, b, 0))) {
                ans.push(state)
                return true;
            }
            else
                if (get_all_states((x, b, c - (x - a)))) {
                    ans.push(state)
                    return true;
                }
            // empty c into b
            if (b + c <= y) {
                if (get_all_states((a, b + c, 0))) {
                    ans.push(state)
                    return true;
                }
            }
            else
                if (get_all_states((a, y, c - (y - b)))) {
                    ans.push(state)
                    return true;


                }

        }

    }
    return false;
}

var initial_state = [8, 0, 0];
get_all_states(initial_state)
ans.reverse()
for (var i in ans) {
    console.log(i)
}
