// TURING

// Baseball Game

// You are keeping score for a baseball game with strange rulesThe game consists of several round, swhere the scores of past rounds may affect future roundss cores. At the beginning of the game, you start with an empty record. You are given a list of strings ops, where ops[i] is the ith operation you must apply to the record and is one of

// the following
// 0. An integer x - Record a new score of x
// 0. "+" - Record a new score that is the sum of the previous two scores. It is guaranteed there will always be two previous scores
// 0. "D" - Record a new score that is double the previous scoreIt is guaranteed there will always be a previous score
// 0. "C" - Invalidate the previous score, removing it from the record. It is guaranteed there will always be a previous score. Return the sum of all the scores on the record

// Example 1:
// Input: ops = ["5","2", "C","D","+"]
// Output: 30
// Explanation:
// "5" - Add 5 to the record, record is now [5].
// "2" -  Add 2 to the record, record is now 5, 2].
// "c" - Invalidate and remove the previous score, record is now [5]
// "D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
// "+" - Add 5+10=15 to the record, record is now [5, 10, 15] .
// The total sum is 5 + 10 + 15 = 30

// Example 2:
// Input: ops =[ "5", "-2", "4", "C", "D", "9", "+", "+" ]
// Output: 27 Explanation:
// "5" - Add 5 to the record, record is now [5].
// "-2" - Add -2 to the record, record is now [5, -2].
// "4" - Add 4 to the record, record is now 5, -2, 4]. 
// "C" - Invalidate and remove the previous score, record is now [5, -2].
// "D" - Add 2 * - 2 = - 4 to the record, record is now [5, -2, -4]. 
// "9" - Add 9 to the record, record is now [5, -2, -4, 9].
// "+" - Add - 4 + 9 = 5 to the record, record is now [5, -2, -4, 9, 5].
// "+" - Add 9 + 5 = 14 to the record, record is now [5, -2, -4, 9, 5, 14].
// The total sum is 5 + 0.2 + 0.4 + 9 + 5 + 14 = 27 .


var calPoints = function(ops) {
    var result = [];
    return result;
    
};

var ops = readline().split(" ");
print(calPoints(ops));



var ops = readline().split(" ");
print(calPoints(ops));

var calPoints = function(ops) {
    var result = [];
    for (var i = 0; i < ops.length; i++) {
        if (ops[i] === "C") {
            result.pop();
        } else if (ops[i] === "D") {
            result.push(result[result.length - 1] * 2);
        } else if (ops[i] === "+") {
            result.push(result[result.length - 1] + result[result.length - 2]);
        } else {
            result.push(parseInt(ops[i]));
        }
    }
    var sum = 0;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;

    return result;
    
};


var ops = readline().split(" ");
print(calPoints(ops));


var isValid = function(s) {
    var stack = [];
    var map = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    for (var i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
            stack.push(s[i]);
        } else {
            var last = stack.pop();
            if (s[i] !== map[last]) {
                return false;
            }
        }
    }
    if (stack.length !== 0) {
        return false;
    }
    return true;
}
let s = readline();
if(isValid(s)) console.log("true");
else console.log("false");



/////////////////////////
// given a string  s, return the "reversed" string where all characters that are not a letter stay in the same place, and all letters reverse their positions.
// example 1:
// input: "ab-cd"
// output: "dc-ba"

// example 2:
// input: "a-bC-dEf=ghIj!!"
// output: "j-Ih-gfE=dCba!!"

function reverseOnlyLetters(S){
    let result = '';
    let a = S.split('');
    let b = [];
    for(let i = 0; i < a.length; i++){
        if(a[i].match(/[a-z]/i)){
            b.push(a[i]);
        }
    }
    b.reverse();
    for(let i = 0; i < a.length; i++){
        if(a[i].match(/[a-z]/i)){
            result += b.shift();
        }else{
            result += a[i];
        }
    }
    return result;
}

//////////////

Unique combination of Boxes

Suppose you are given a set of boxes numbered from 0 to n. Each box has a unique binary representation based on the number of 1's in its binary form. Your task is to create an array of length n + 1 that contains the number of 1's in the binary representation of each box number from 0 to n. Write a function that takes n as input and returns the array with the required information?

Example 1:
Input: n = 3
Output: [0,1,1,2]
Explanation: 
0 -->0
1 -->1
2 -->10
3--> 11N_{2}

Example 2:
Input: n = 5
Output: [0,1,1,2,1,2]
Explanation:
0 --> 0
1 --> 1
2 --> 10
3 --> 11 
4 --> 100
5 --> 101


Constraints:
0 <= n <= 100000

var solution = function(n) {
    var result = [];
    for (var i = 0; i <= n; i++) {
        var count = 0;
        var binary = i.toString(2);
        for (var j = 0; j < binary.length; j++) {
            if (binary[j] === "1") {
                count++;
            }
        }
        result.push(count);
    }
    return result;
}

// oke

////////////////////////
// The Last Sumo

// You are given an array of integers 'power' where power[i] is the power of the ith sumo wrestler.
// All sumo wrestlers participated in one championship. In each round, the two most powerful sumo will be chosen and they will fight each other. Suppose the two powerful sumo wrestlers have power A and B respectively.
// Below are the rules of this championship to win 
// - If A == B, both sumos will lose fight, and
// - If A != B, the sumo 'A' will lose a match, and the weight of sumo B has a new weight B-A.
// Return the power of the last remaining sumo wrestler. If there are no sumo left,return 0

// Example 1:
// Input: weights = [2,7,4,1,8,1]
// Output: 1
// Explanation:
// First fight will be in between 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// Second fight will be in between 2 and 4 to get 2 so the array converts to [2,1,1,1]then, 
// Third fight will be in between 2 and 1 to get 1 so the array converts to [1,1,1]then,
// The last fight will be between 1 and 1 to get 0 so the array converts to [1] then that's the value of the last sumo wrestler.

// Example 2:
// Input: weights = [1]
// Output: 1

Constraints:
1 <= weights.length <= 30 
1 <= weights[i] <= 1000

var solution = function(weights) {
    var result = [];
    for (var i = 0; i < weights.length; i++) {
        result.push(weights[i]);
    }
    while (result.length > 1) {
        var max1 = Math.max(...result);
        result.splice(result.indexOf(max1), 1);
        var max2 = Math.max(...result);
        result.splice(result.indexOf(max2), 1);
        if (max1 !== max2) {
            result.push(max1 - max2);
        }
    }
    if (result.length === 0) {
        return 0;
    }
    return result[0];
}

// doesnt work