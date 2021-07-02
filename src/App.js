import './App.scss';
import Dropdown from "./components/Dropdown";

const data = [{
    id: 1,
    title: 'Group 1',
    danger: false,
    items: [
        {id: 1, text: 'Item 1', disabled: false},
        {id: 2, text: 'Item 2 Item 2 Item 2 Item 2 Item 2 Item 2 Item 2 Item 2 Item 2', disabled: false},
        {id: 3, text: 'Item 3', disabled: true},
    ]
}, {
    id: 2,
    title: 'Group 2',
    danger: true,
    items: [
        {id: 4, text: 'Item 4', disabled: false},
        {id: 5, text: 'Item 5 Item 5 Item 5 Item 5 Item 5 Item 5 Item 5 Item 5 Item 5 Item 5 Item 5 Item 5 Item 5 Item 5 ', disabled: false},
        {id: 6, text: 'Item 6', disabled: true},
    ]
},
]

function App() {
  return (
    <div className="App">
      <Dropdown
          disabled={false}
          maxWidth={300}
          listMaxWidth={340}
          data={data}
      />
    </div>
  );
}

export default App;
