import "./App.css";

function App() {
  return (
    <div className="App">
      <input
        type="file"
        onChange={(event) => {
          const formData = new FormData();
          formData.append("sum", "33.54");
          const file = event.currentTarget.files?.[0];
          console.log(file);
          if (!file) return;
          formData.append("file", file);

          try {
            fetch("http://localhost:3000/api/v1/receipts", {
              method: "POST",
              body: formData,
            }).catch(console.error);
          } catch (err) {
            console.error(err);
          }
        }}
        accept=".jpg,.jpeg,.png,.pdf"
      />
    </div>
  );
}

export default App;
