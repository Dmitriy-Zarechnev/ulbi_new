// Utils
import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        const expected = 'SomeClass';

        expect(classNames('SomeClass')).toBe(expected);
    });

    test('with additional class', () => {
        const expected = 'SomeClass ClassOne ClassTwo';

        expect(classNames(
            'SomeClass',
            {},
            ['ClassOne', 'ClassTwo'],
        ))
            .toBe(expected);
    });

    test('with modes: true & true', () => {
        const expected = 'SomeClass ClassOne ClassTwo Hovered Scrollable';

        expect(classNames(
            'SomeClass',
            { Hovered: true, Scrollable: true },
            ['ClassOne', 'ClassTwo'],
        ))
            .toBe(expected);
    });

    test('with modes: true & false', () => {
        const expected = 'SomeClass ClassOne ClassTwo Hovered';

        expect(classNames(
            'SomeClass',
            { Hovered: true, Scrollable: false },
            ['ClassOne', 'ClassTwo'],
        ))
            .toBe(expected);
    });

    test('with modes: true & undefined', () => {
        const expected = 'SomeClass ClassOne ClassTwo Hovered';

        expect(classNames(
            'SomeClass',
            { Hovered: true, Scrollable: undefined },
            ['ClassOne', 'ClassTwo'],
        ))
            .toBe(expected);
    });
});
