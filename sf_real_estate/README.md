## Visualization of San Francisco real estate prices

The impetus for this chart was to see if real estate prices in San Francisco have moved
similarly across all price ranges.  There are three "boundary" cases:

1) High end real estate increases fastest - Large homes and the prime neighborhoods?
2) Low end real estate increases fastest - Starter homes/condos and the developing neighborhoods?
3) Everything goes up just about the same - Everybody is moving here.

To do this, the data was scrubbed from the Bay Area Home Sales database hosted by
California REsources.  See [the backend repository] for more info about the data.

This plot charts for each year: the normalized (to 2008) price vs. percentile.
The years can be highlighted using the mouseover on the left.

Half of the purpose of this example was to work with the awesome interactive graph developed by bdilday for 
[visualizing baseball batted ball data].  That data lends itself much better to this viz.

### Results

It looks like case 3 is the most correct.  Housing prices are fairly constant: (2015 prices) ~ 1.4 * (2008 prices)

One interesting note is that after 2009, the lower half of the market continued to bottom out until 2011, with the 
hardest hit being at the extreme low end (percentile < 30%).  The higher end of the market (percentile > 70%), however,
hit its bottom in 2009 and made a full recovery by 2012.

Since then, housing prices across the board have increased dramatically across the board every year, though we
didn't need a fancy graph to highlight that trend.
