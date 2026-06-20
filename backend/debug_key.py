import os
from dotenv import load_dotenv

load_dotenv()

key = os.getenv("ANTHROPIC_API_KEY")

print("--- Checking .env value ---")
if not key:
    print("PROBLEM FOUND: ANTHROPIC_API_KEY is empty or missing from .env")
else:
    print(f"Key length: {len(key)} characters")
    print(f"Starts with: {key[:12]}")
    print(f"Ends with: {key[-6:]}")
    print(f"Contains a quote mark: {chr(34) in key or chr(39) in key}")
    print(f"Has leading/trailing whitespace: {key != key.strip()}")
    print(f"Contains a line break: {chr(10) in key or chr(13) in key}")

print()
print("--- Testing a real call to Anthropic ---")

import anthropic

client = anthropic.Anthropic(api_key=key)

try:
    response = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=50,
        messages=[{"role": "user", "content": "Say hello in exactly 3 words."}],
    )
    print("SUCCESS! The model replied:")
    print(response.content[0].text)
except Exception as e:
    print("FAILED with this error:")
    print(repr(e))
