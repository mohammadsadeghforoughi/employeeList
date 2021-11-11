AOS.init();

_getEmployees((res) => {
  let data = res.data.map((i) => {
    return {
      name: i.first_name + " " + i.last_name,
      email: i.email,
      avatar: i.avatar,
      id: i.id,
    };
  });

  data.map((i) => {
    addCart(i);
  });
});
