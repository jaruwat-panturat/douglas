import '@types/jest';
import {LineService} from './Line.service';

describe("LineService", () => {
    test("sendPush()", () => {
        const lineService = new LineService();
        lineService.sendPush('123');

        expect( 1+1 ).toEqual(2);
    });
});
