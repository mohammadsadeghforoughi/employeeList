function addCart({ name, email, id, avatar }) {
  let content = `
    <div class="col-2 my-2 ">
    <div class="custom-cart px-2 py-4 d-flex flex-column">
      <div class="w-75 rounded-circle mx-auto mb-3">
        <img
          src="${avatar}"
          class="rounded-circle"
        />
      </div>
      <small class="pl-5">
        <code class="text-muted"> id: ${id}</code>
      </small>
      <span class="pl-5 font-weight-bold"> ${name} </span>
      <span class="pl-5 font-weight-light" style="font-size: 13px">
       ${email}
      </span>
    </div>
    
  </div>
    `;
  $("#wrapper").append(content);
}


