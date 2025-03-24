import { ListSubheader } from '@mui/joy';
import { BodySheets, NavTitleText } from '../template/theme';
import {  ImageList, ImageListItem, ImageListItemBar } from '@mui/material';

export default function Art() {
  return (
    <BodySheets sx={{padding: '2rem', overflow: 'auto'}}>
      <ImageList sx={{ width: '100%' }} variant="quilted" cols={6}>
      <ImageListItem key="Subheader" cols={6}>
        <ListSubheader component="div">
          <NavTitleText sx={{padding: '1rem 0'}}>Non-digital art</NavTitleText>
        </ListSubheader>
      </ImageListItem >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
            style={{borderRadius: '.3rem',}}
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.media}
          />
        </ImageListItem>
      ))}
    </ImageList>
    </BodySheets>
  );
}

const itemData = [
  {
    img: './static/images/drawing2025.png',
    title: 'Still, EEAAO',
    media: 'Summer 2024. Pencil on paper',
    rows: 2,
    cols: 2,
    featured: false,
  },
  {
    img: './static/images/sculpture2025.jpeg',
    title: 'Bust, live model',
    media: 'Fall 2024. Red clay on wooden armiture.',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: './static/images/painting2025.jpg',
    title: 'Portrait, live model',
    media: 'Winter 2024. Oil on canvas.',
    rows: 2,
    cols: 2,
    featured: false,
  },


]