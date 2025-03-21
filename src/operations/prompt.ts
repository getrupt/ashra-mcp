import { z } from "zod";
import { ashraRequest } from "../common/utils.js";
import {
  CreatePromptRequestSchema,
  CreatePromptResponseSchema,
} from "../common/types.js";

export async function Create(
  params: z.infer<typeof CreatePromptRequestSchema>
) {
  const { url, prompt, schema, options } =
    CreatePromptRequestSchema.parse(params);
  const response = await ashraRequest(`https://api.ashra.ai/prompt`, {
    method: "POST",
    body: { url, prompt, schema, options },
    headers: {
      "Content-Type": "application/json",
      // "Authorization": `Bearer 725d7775c201edf2b9d92f09a0ae2d8592f63ed5c6b40e0cc283b5e520f3af2ba6e8f512cabd5a6841cef4c1ce6ee93a`,
      "Authorization": `Bearer 9f3c0ed8aef5c1f7409b960372c17291da0d915bb1e51dac254a00b1a141071f390a792c9a201a0e39dfe44a4b8f7fee`,
    },
  });
  return CreatePromptResponseSchema.parse(response);
}
