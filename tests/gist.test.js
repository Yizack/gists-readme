import { describe, it, expect, vi } from "vitest";
import { getGist } from "./../src/gist.js";
import { $fetch } from "ofetch";

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

const errorGist = {
  errors: []
};

vi.mock("ofetch", async (importOriginal) => {
  const mod = await importOriginal();
  return {
    ...mod,
    $fetch: vi.fn()
  };
});

describe("getGist", () => {
  it("gist id - should return gist", async () => {
    vi.mocked($fetch).mockResolvedValue(fakeGist);
    const gist = await getGist("cbe7cef5572e6b832da0e9bd3454b312");
    expect(gist.data.viewer.gist.files[0].language.name).toEqual("JSON");
  });

  it("undefined - should go on error and return null gist object", async () => {
    vi.mocked($fetch).mockResolvedValue(errorGist);
    const gists = await getGist();
    expect(gists.data.viewer.gist).toBeNull();
  });

  it("gist doesn't exist - should return empty object", async () => {
    vi.mocked($fetch).mockResolvedValue(fakeNULL);
    const gists = await getGist("_");
    expect(gists.data.viewer.gist).toBeNull();
  });
});
