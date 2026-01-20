
import { describe, expect, test } from "vitest";
import { getAPIKey } from "./auth";

describe("getApiKey", () => {
  test("is a noop w/o authorizatoin header", () => {
    expect(getAPIKey({})).toBeNull()
  })

  test("is a noop w/o 'ApiKey' in auth header", () => {
    expect(getAPIKey({authorization: "abc123"})).toBeNull()
  })

  test("returns the token in auth header", () => {
    expect(getAPIKey({authorization: "ApiKey abc123"})).toBe("abc123")
  })
})
