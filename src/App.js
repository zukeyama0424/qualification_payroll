import { useState } from "react";
import "./styles.css";

export default function App() {
  const [baseSalary, setBaseSalary] = useState(0);
  const [qualificationSalary, setQualificationSalary] = useState(0);
  // const [athorSalary, setAthorSalary] = useState(0);
  // const [totalSalary, setTotalSalary] = useState(0);
  const [overtimelump, setOvertimelump] = useState(0);

  const handlChangeBase = (e) => {
    setBaseSalary(e.target.value);
  };

  const handlChangeQualification = (e) => {
    setQualificationSalary(e.target.value);
  };
  // 超勤一括手当と給与合計の計算
  const payroll = () => {
    setOvertimelump(baseSalary + 55000 + qualificationSalary);
    // setTotalSalary(
    //   baseSalary + 55000 + qualificationSalary + athorSalary + overtimelump
    // );
  };

  const claer = () => {
    setOvertimelump(0);
  };
  return (
    <>
      基本給：
      <input type={Text} onChange={handlChangeBase} />
      <br />
      生涯設計手当:55000円
      <br />
      資格手当：
      <input type={Text} onChange={handlChangeQualification} />
      <br />
      その他手当:
      <input type={Text} />
      <br />
      <button onClick={payroll}>計算</button>
      <button onClick={claer}>クリア</button>
      <br />
      超勤一括手当（45時間）：約{overtimelump}円
      <br />
      {/* 給与：約{totalSalary}円 */}
    </>
  );
}
