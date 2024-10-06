import * as React from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import { styled } from "@mui/material/styles"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell, { tableCellClasses } from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import Search from "./Search"


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`] : {
    fontSize: 14
  }
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0
  }
}))

function Tsection() {
  const [data, setData] = useState([])
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  
  useEffect(() => {
    axios
      .get("https://jonsnow7.pythonanywhere.com/nestedlist/")
      .then((response) => setSelectedData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    axios.get("https://jonsnow7.pythonanywhere.com/list/")
    .then((response) => {
      setData(response.data);
    })
  }, [])

  const optionValue = data.map((item) => item)

  const filteredData = data.filter((item) =>
    item.Name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <div
        className={`items-center transition-all duration-100 ease-in w-fit m-6 ml-80 p-4 ${
          isScrolled
            ? " sticky top-0 w-3/4 bg-white shadow-lg rounded-xl border border-gray-300"
            : "bg-transparent"
        }`}
      >
        <div className="-ml-56 lg:m-0">
          <Search optionValue={optionValue} setSearchTerm={setSearchTerm} />
        </div>
      </div>
      <div className="h-72 w-93 lg:ml-72 lg:h-full my-10 lg:w-98 p-5">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">Cost</StyledTableCell>
                <StyledTableCell align="right">Durability</StyledTableCell>
                <StyledTableCell align="right">Strength</StyledTableCell>
                <StyledTableCell align="right">Resistance</StyledTableCell>
                <StyledTableCell align="right">Performance</StyledTableCell>
                <StyledTableCell align="right">Pressure</StyledTableCell>
                <StyledTableCell align="right">
                  ConstructionCost
                </StyledTableCell>
                <StyledTableCell align="right">
                  AreaMeasurements
                </StyledTableCell>
                <StyledTableCell align="right">RiskScore</StyledTableCell>
                <StyledTableCell align="right">MaterialScore</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map((item) => (
                <StyledTableRow key={item.id}>
                  <StyledTableCell component="th" scope="row">
                    {item.Name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {item.Cost_per_Unit}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {item.Durability}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {item.Strength}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {item.Resistance}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {item.Performance}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {item.Pressure}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {item.Construction_Cost_Over_Time_Years}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {item.Area_Measurements}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {item.Risk_Score}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {item.Material_Score}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Tsection;
