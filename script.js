const form = document.getElementById("contact-form");
const statusEl = document.getElementById("form-status");

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function setStatus(message, type) {
  statusEl.textContent = message;
  statusEl.className = "form-status";
  if (type) statusEl.classList.add(type);
}

function markInvalid(field, invalid) {
  field.classList.toggle("invalid", invalid);
}

if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = form.elements["name"];
    const organization = form.elements["organization"];
    const email = form.elements["email"];
    const message = form.elements["message"];

    const invalidName = name.value.trim().length < 2;
    const invalidOrg = organization.value.trim().length < 2;
    const invalidEmail = !isValidEmail(email.value.trim());
    const invalidMessage = message.value.trim().length < 10;

    markInvalid(name, invalidName);
    markInvalid(organization, invalidOrg);
    markInvalid(email, invalidEmail);
    markInvalid(message, invalidMessage);

    if (invalidName || invalidOrg || invalidEmail || invalidMessage) {
      setStatus("Please complete all fields with a valid email address.", "error");
      return;
    }

    const button = form.querySelector("button");
    button.disabled = true;
    setStatus("Sending message...", "");

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { "Accept": "application/json" }
      });

      if (response.ok) {
        form.reset();
        setStatus("Message sent. Thank you — I will get back to you soon.", "success");
      } else {
        setStatus("The message could not be sent. Please email directly: lavi.gadi@gmail.com", "error");
      }
    } catch (error) {
      setStatus("The message could not be sent. Please email directly: lavi.gadi@gmail.com", "error");
    } finally {
      button.disabled = false;
    }
  });
}
