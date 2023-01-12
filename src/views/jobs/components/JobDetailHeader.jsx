import { Stack, Typography, Box } from "@mui/material";
import { Button } from "@/components/common";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { grey } from "@mui/material/colors";

export function JobDetailHeader({ job }) {
  return (
    <Box
      sx={{ padding: "36px 16px 20px", boxShadow: `0 5px 5px ${grey[300]}` }}
    >
      <Stack>
        <Typography variant="h6" component="h6" sx={{ fontWeight: "600" }}>
          {job.title}
        </Typography>
        <Typography variant="body1">{job.company}</Typography>
        <Typography variant="body1">{job.location}</Typography>
        <Typography variant="body1">{job.salaryRange}</Typography>
        <Stack direction="row" gap={2} mt={1}>
          <Button
            variant="contained"
            color="primary"
            sx={{ maxWidth: "max-content" }}
          >
            Apply Now
          </Button>
          <Button
            sx={{
              background: `${grey[300]}`,
              maxWidth: "max-content",
              color: "black",
            }}
          >
            <FavoriteBorderIcon />
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export default JobDetailHeader;
