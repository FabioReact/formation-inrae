const Cities = () => {
  return (
    <section>
      <h1>Cities to visit</h1>
      <form>
        <label htmlFor='city'>City name:</label>
        <input type='text' id='city' name='city' />
        <button>Add</button>
      </form>
    </section>
  );
};

export default Cities;
