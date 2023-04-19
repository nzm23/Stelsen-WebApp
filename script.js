// SCRIPT FOR SUBMITTING THE DATA

window.addEventListener("load", function() {
  const form = document.getElementById('my-form');
  form.addEventListener("submit", function(e) {
    var txt;
  if (confirm("Are you sure you want to submit?")) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      alert("Submitted!");
    })
    form.reset();
  } else {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: null,
      body: data,
    })
  }
  });
});
  