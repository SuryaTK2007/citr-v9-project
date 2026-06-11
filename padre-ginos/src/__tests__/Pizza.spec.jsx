import { render, cleanup } from "@testing-library/react";
import Pizza from "../Pizza";
import { expect, test } from "vitest"; 

test("alt test renders on Pizza image", async () => {
    const name = "My Favourite Pizza";
    const src = "https://picsum.photos/300/200";
    const screen = render(
        <Pizza name={name} description="super cool pizza" image={src} />
    );
    const img = screen.getByRole("img");
    expect(img.src).toBe(src);
    expect(img.alt).toBe(name);
    cleanup();
});
test("to have default image if none is provided", async () => {
    const name = "My Favourite Pizza";
    const screen = render(
        <Pizza name={name} description="super cool pizza" />
    );
    const img = screen.getByRole("img");
    expect(img.src).toBe("https://picsum.photos/300/200");
    expect(img.alt).toBe(name);
    cleanup();
}); 