import Typography from '@mui/material/Typography';
import Paper, { PaperProps } from '@mui/material/Paper';

import { useTranslate } from 'src/locales';

// ----------------------------------------------------------------------

interface Props extends PaperProps {
  query?: string;
}

export default function SearchNotFound({ query, sx, ...other }: Props) {
  const { t } = useTranslate();

  return query ? (
    <Paper
      sx={{
        bgcolor: 'unset',
        textAlign: 'center',
        ...sx,
      }}
      {...other}
    >
      <Typography variant="h6" color="error" gutterBottom>
        {t('search.not_found')}
      </Typography>

      <Typography variant="body2" gutterBottom>
        {t('search.no_results_for')} &nbsp;
        <strong>&quot;{query}&quot;</strong>.
      </Typography>

      <Typography variant="body2" gutterBottom>
        <i>{t('search.no_results_hint')}</i>
      </Typography>
    </Paper>
  ) : (
    <Typography variant="body2" sx={sx}>
      {t('search.hint')}
    </Typography>
  );
}
