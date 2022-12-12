const onSubmit = (e) => {
  e.preventDefault();
  document.querySelector("#image").src = "";
  document.querySelector(".msg").textContent = "";
  const text = document.querySelector("#prompt").value;
  const size = document.querySelector("#size").value;
  if (!text) return;
  generateImage(text, size);
};

const generateImage = async (text, size) => {
  const spinner = document.querySelector(".spinner");
  spinner.classList.add("show");

  try {
    const res = await fetch("/openai/generate", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        text,
        size,
      }),
    });
    if (!res.ok) {
      throw new Error("Failed to generate image");
    }
    const { data } = await res.json();
    document.querySelector("#image").src = data;
  } catch (error) {
    document.querySelector(".msg").textContent = error.message;
  } finally {
    spinner.classList.remove("show");
  }
};

const form = document.querySelector("#image-form");
form.addEventListener("submit", onSubmit);
