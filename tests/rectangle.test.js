import { getRectanglePerimeter, getRectangleArea, getRectangleInfo } from "../js/rectangle";

// Positive test-cases

test('should output rectangle perimeter', () => {
    const perimeter = getRectanglePerimeter(2, 3);
    expect(perimeter).toBe(10);
})

test('should output rectangle area', () => {
    const area = getRectangleArea(2, 3);
    expect(area).toBe(6);
})

test('should output rectangle info', () => {
    const logSpy = jest.spyOn(console, 'log');
    getRectangleInfo(2, 3)
    expect(logSpy).toHaveBeenCalledWith('The perimeter of a rectangle is 10 and the area is 6');
});

// Another way how to test console.log()
//
// test('should output rectangle info', () => {
//     console.log = jest.fn();
//     getRectangleInfo(2, 3);
//     expect(console.log).toHaveBeenCalledWith('The perimeter of a rectangle is 10 and the area is 6');
// });


/**
 * I assume that function should throw Error, if length or width either negative or 0.
 * Our basic function does not throw Error. It is logically incorrect.
 * So I wrote some negative cases if function throws error for negative value or zero.
 */

// Negative Test-Cases
// Negative Test-Cases for getRectanglePerimeter(length, width)

// test('should throw error in Perimeter function, when values length and width are negative', () => {
//     expect(() => {
//         getRectanglePerimeter(-2, -3);
//     }).toThrow();
// })
//
// test('should throw error in Perimeter function, when value length is negative', () => {
//     expect(() => {
//         getRectanglePerimeter(-2, 3);
//     }).toThrow();
// })
//
// test('should throw error in Perimeter function, when value width is negative', () => {
//     expect(() => {
//         getRectanglePerimeter(2, -3);
//     }).toThrow();
// })
//
// test('should throw error in Perimeter function, when value length is 0', () => {
//     expect(() => {
//         getRectanglePerimeter(0, 3);
//     }).toThrow();
// })
//
// test('should throw error in Perimeter function, when value width is 0', () => {
//     expect(() => {
//         getRectanglePerimeter(2, 0);
//     }).toThrow();
// })
//
// test('should throw error in Perimeter function, when values length and width are 0', () => {
//     expect(() => {
//         getRectanglePerimeter(0, 0);
//     }).toThrow();
// })
//
// // Negative Test-Cases for getRectangleArea(length, width)
//
// test('should throw error in Area function, when values length and width are negative', () => {
//     expect(() => {
//         getRectangleArea(-2, -3);
//     }).toThrow();
// })
//
// test('should throw error in Area function, when value length is negative', () => {
//     expect(() => {
//         getRectangleArea(-2, 3);
//     }).toThrow();
// })
//
// test('should throw error in Area function, when value width is negative', () => {
//     expect(() => {
//         getRectangleArea(2, -3);
//     }).toThrow();
// })
//
// test('should throw error in Area function, when values length and width are 0', () => {
//     expect(() => {
//         getRectangleArea(0, 0);
//     }).toThrow();
// })
//
// test('should throw error in Area function, when value length is 0', () => {
//     expect(() => {
//         getRectangleArea(0, 3);
//     }).toThrow();
// })
//
// test('should throw error in Area function, when value width is 0', () => {
//     expect(() => {
//         getRectangleArea(2, 0);
//     }).toThrow();
// })
//
// // Negative Test-Cases for getRectangleInfo(length, width)
//
// test('should throw error in Info function, when values length and width are negative', () => {
//     expect(() => {
//         getRectangleInfo(-2, -3);
//     }).toThrow();
// })
//
// test('should throw error in Info function, when value width is negative', () => {
//     expect(() => {
//         getRectangleInfo(2, -3);
//     }).toThrow();
// })
//
// test('should throw error in Info function, when value length is negative', () => {
//     expect(() => {
//         getRectangleInfo(-2, 3);
//     }).toThrow();
// })
//
// test('should throw error in Info function, when value width is 0', () => {
//     expect(() => {
//         getRectangleInfo(2, 0);
//     }).toThrow();
// })
//
// test('should throw error in Info function, when value length is 0', () => {
//     expect(() => {
//         getRectangleInfo(0, 3);
//     }).toThrow();
// })
//
// test('should throw error in Info function, when values length and width are 0', () => {
//     expect(() => {
//         getRectangleInfo(0, 0);
//     }).toThrow();
// })
