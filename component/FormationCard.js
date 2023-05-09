import { Stack, Typography } from "@mui/material";
import data from "../data.js";
import { useEffect } from "react";

export default function FormationCard({
  date,
  title,
  description,
  list,
  listName,
}) {
  const result = [];
  //   function funcList() {
  //     data.map((datas) => {
  //       // console.log(datas.name);
  //       if (datas.name === listName) {
  //         console.log("validé");
  //         datas.description.map((d, i) => {
  //           console.log(d);
  //           result.push(
  //             <Typography key={i} variant="subtitle1">
  //               • {d}
  //             </Typography>
  //           );
  //         });
  //       }
  //       return result;
  //     });
  //   }

  //   useEffect(() => {
  //     funcList();
  //   }, []);
  return (
    <Stack direction="row" alignItems="center">
      <Typography variant="h6" color="#3f4040" mr={1}>
        {date}
      </Typography>
      <Stack
        pl={2}
        sx={{
          borderLeft: 4,
          borderLeftColor: "#8d9090",
        }}
      >
        <Typography variant="h6" color="#3f4040">
          {title}
        </Typography>
        {list ? (
          data.map((datas) => {
            // console.log(datas.name);
            if (datas.name === listName) {
              console.log("validé");
              datas.description.map((d, i) => {
                console.log(d);
                result.push(
                  <Typography key={i} variant="subtitle1">
                    • {d}
                  </Typography>
                );
              });
            }
            return result;
          })
        ) : (
          <Typography variant="subtitle1">{description}</Typography>
        )}
      </Stack>
    </Stack>
  );
}
