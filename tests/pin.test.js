import { describe, it, expect } from "vitest";
import { getPin } from "./../src/pin.js";

const fakeGist = {
  id: "cbe7cef5572e6b832da0e9bd3454b312",
  data: {
    viewer: {
      gist: {
        description: "Provincias, distritos y corregimientos de Panamá incluyendo las comarcas a nivel de provincias y su respectivo prefijo de cédula. Archivo JSON. Actualizado 2024",
        owner: {
          login: "Yizack"
        },
        stargazers: {
          totalCount: 1
        },
        forks: {
          totalCount: 1
        },
        files: [
          {
            name: "provincias.json",
            language: {
              name: "JSON"
            },
            size: 1
          }
        ]
      }
    }
  }
};

const fakeNULL = { data: { viewer: { gist: null } } };

const definedPin = [
  { id: "cbe7cef5572e6b832da0e9bd3454b312" },
  { id: "cbe7cef5572e6b832da0e9bd3454b312", owner: "true" }
];

const emptyPin = [
  { id: "_" },
  { }
];

describe("getPin", () => {
  definedPin.forEach((query) => {
    it(`${JSON.stringify(query)} - should return pin`, async () => {
      const pin = await getPin(query, fakeGist);
      expect(pin).toBeDefined();
    });
  });

  emptyPin.forEach((query) => {
    it(`${JSON.stringify(query)} - should return empty pin`, async () => {
      const pin = await getPin(query, fakeNULL);
      expect(pin.filename).toBeUndefined();
    });
  });
});
