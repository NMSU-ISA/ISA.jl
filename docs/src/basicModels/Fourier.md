
# Fourier Series

Consider a component set consisting of a set of harmonicly related SHCs

$\mathscr{S}\triangleq\left\{\cdots,\mathscr{C}_{-1},\mathscr{C}_0,\mathscr{C}_1,\cdots\right\},~\mathscr{C}_k = \left\{a_k,k\omega_0, \phi_k\vphantom{0^0}\right\},~k = 0,\pm 1,\pm 2,\cdots .$

The AM--FM model corresponding to this set is a [Fourier Series](https://en.wikipedia.org/wiki/Fourier_series)

$z(t) = \sum\limits_{k=-\infty}^{\infty} a_k \mathrm{e}^{\,\mathrm{j}(k\omega_0 t +\phi_k)}$

A partial sum (over $k$) of a Fourier series can be visualized as an IS.

```julia
using ISA, Plots
T = 1.0
aₖ(k) = 1.0
kInds = collect(-25:25)
z = fourierSeries(T, aₖ, kInds)
plot(z; timeaxis=-1.0:0.001:1.0)
```
![](https://raw.githubusercontent.com/NMSU-ISA/ISA/master/docs/src/assets/IS_exFourier.png)