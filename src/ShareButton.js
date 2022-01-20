import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";

const ShareButton = (props) => {
	const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
    navigator.clipboard.writeText(props.url);
  };

  return (
    <div>
      <Button size="small" onClick={handleClick}>
        <Typography style={{ fontWeight: 600 }}>Share</Typography>
      </Button>

      <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={() => {
          setOpen(false);
        }}
        message="Link copied to clipboard"
      />
    </div>
  );
};

export default ShareButton;
