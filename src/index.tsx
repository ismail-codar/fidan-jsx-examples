const view1 = <div>Hello</div>;

const appMain = document.getElementById("app");
appMain.appendChild(view1 as any);

if (module["hot"]) {
  module["hot"].dispose(function() {
    appMain.firstElementChild && appMain.removeChild(appMain.firstElementChild);
  });

  module["hot"].accept(function() {
    appMain.appendChild(view1 as any);
  });
}
