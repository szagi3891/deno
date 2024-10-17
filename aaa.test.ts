import { /*assert,*/ assertEquals } from "jsr:@std/assert";

Deno.test("assert works correctly", () => {
    const aa = {
        name: '111',
    };

    const bb = {
        name: '111',
    };

    assertEquals(aa, bb);
});
