import pandas as pd
gun_violence_df = pd.read_csv('reduced_gun_violence.csv')
gun_violence_df.to_html('firearms_table.html')