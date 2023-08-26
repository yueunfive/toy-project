import "./TodoList.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

const TodoList = ({ todo, onUpdate, onDelete, onEdit }) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  // 검색어에 따라 필터링하기 & 대소 문자 구별 X (전부 소문자로)
  const getSearchResults = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };

  return (
    <div className="TodoList">
      <h4>Todo List 📘</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        className="searchbar"
        placeholder="검색어를 입력하세요"
      />
      <div className="list_wrapper">
        {getSearchResults().map((it) => (
          <TodoItem
            key={it.id}
            {...it}
            onUpdate={onUpdate}
            onDelete={onDelete}
            onEdit={onEdit}
          />
          // {...it} : 컴포넌트에 it 객체 각각의 프로퍼티 전달
        ))}
      </div>
    </div>
  );
};
export default TodoList;
