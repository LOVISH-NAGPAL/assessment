
import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts, setLoading, setError } from "./redux store/slices/slice1";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const App = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.data.posts);
  const loading = useSelector((state) => state.data.loading);
  const error = useSelector((state) => state.data.error);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading(true));
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        dispatch(setPosts(data));
      } catch (err) {
        dispatch(setError("Failed to fetch data"));
        console.error("Fetch error:", err);
      } finally {
        dispatch(setLoading(false));
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <div>
      {loading && <p style={{ textAlign: "center", fontWeight: "bold" }}>Loading...</p>}
      {error && <p style={{ textAlign: "center", color: "red" }}>{error}</p>}

      <TableContainer component={Paper} sx={{ width: { xs: "100%", md: "50%" }, margin: "auto", mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>ID</strong></TableCell>
              <TableCell><strong>Title</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.title}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default App;
