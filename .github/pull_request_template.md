> This template contains and example PR. Follow it or deviate from it as you see fit.
> 
> Please Write a summary of the change you are pushing and which issue it is fixing. Include relevant motivation and context. We will refer to this summary to understand the changes in our codebase in the future.

I have finished the implementation of the `arg_flying_pkg` for ISAAC. Some important changes to consider:

- ISAAC can fly now
- The `arg_jetpack_pkg` has been deprecated
- I removed some old code related to `arg_laser_beam_pkg`

## How to run

Just like the other packages, source your ROS distro and write

``` sh 
roslaunch arg_flying_pkg start_flying.launch
```

ISAAC should start flying now.

## Style

- [x] The code follows the style guidelines of this project
- [x] I have made corresponding changes to the documentation
- [x] The code complies with `roslint`
- [x] The code does not introduce any new warnings

## Testing

> As we improve our code quality, we will implement better testing methodologies. For now lets do these two at the very least:

- [x] I tested the changes on my local computer
- [x] I tested the changes on ISAAC

## Future Work

- Remove `arg_jetpack` dependencies
- Improve landing smoothness
