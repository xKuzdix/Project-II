var GAME_LEVELS = [
  ["                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                   k            ",
   "                                                                  xxx           ",
   "                             o                     xxx     xx    xx!xx          ",
   "             o  o                   o f      xx                  x!!!x          ",
   "                                                                 xx!xx          ",
   "            xxxxxx                 x!!!x                          xvx           ",
   "                                   xxxxx                                   xxx  ",
   "  xx f xx                    x            o o                                x  ",
   "  x     x              o                                                     x  ",
   "  x     x             xxx                xxxxx                             o x  ",
   "  x  @  x                                                                    x  ",
   "  x     x            o                           f            xxxxxx    c    x  ",
   "  xxxxxxxxxxxx  xxxxx  xxxxxxxx   xxxxxxxx   xxxxxxxxx  f  xxxx    xxxxxxxxxxx  ",
   "             x!!x   x!!x      x   x      x!!!x       x  x  x                    ",
   "             x!!x   xxxx      x!!!x      xxxxx       x!!!!!x                    ",
   "             xxxx             x!!!x                  x!!!!!x                    ",
   "                              xxxxx                  xxxxxxx       y            ",
   "                                                                                ",
   "                                                                                "],
  ["x                                                                             x",
   "x                                xxxxx                                        x",
   "x                                x!!!x                                        x",
   "x                                xxvxx                                        x",
   "x                                                                             x",
   "x                                                                             x",
   "x                                                                             x",
   "x                                                                         k   x",
   "x                                                                      xxxxxx x",
   "x                                                     f        f              x",
   "x                                                                             x",
   "x                                                             f               x",
   "x                                                                             x",
   "x                   f           x     x                      f                x",
   "x                         f     x!!!!!xx            xx                        x",
   "x               xxxxx           x!!!!!xxx           xx      o                 x",
   "x                   x         f x!!!!!xxxx          xx     xxx                x",
   "x           f       x         o x!!!!!xxxxx       o xx                        x",
   "x                   x         f x!!!!!xxxxxx  c   xxxx                        x",
   "x       @           x           x!!!!!xxxxxxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!x",
   "x       x           x    c  o   x!!!!!xxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x",
   "x  =   xxx    =     xxxxxxxxxxxxx!!!!!xxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x",
   "x!!!!!xxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],
   ["x                                                                             x",
    "x                                                                             x",
    "x                                                                             x",
    "x                                                                             x",
    "x                                                                             x",
    "x                                                                             x",
    "x                                                                             x",
    "x                                                                             x",
    "x                                                     xx        =             x",
    "x                                                                      k      x",
    "x                                             f                x      xxx     x",
    "x                                                                             x",
    "x                                          xxx                                x",
    "x                                                                             x",
    "x   x!!!!!!!x                    xxxxx                                        x",
    "x   x!!!!!!!x         =          x!!!x                                        x",
    "x   x!!!!!!!x                    xxvxx              f                         x",
    "x   xvxxvxxvx                                       o                         x",
    "x                          x                        f                         x",
    "x                          x                        f                         x",
    "x                          x             x          o                         x",
    "x                          xxxxxxxx      x          f                         x",
    "x                                        x          f          =              x",
    "x                                        x          o                         x",
    "x                          xxxxxxxxxxxxxxx                    =               x",
    "x                                       |                                     x",
    "x                   f           x     x                      =                x",
    "x                               x!!!!!x             xx                        x",
    "x               xxxxx           x!!!!!x      =      xx         o              x",
    "x         f         x!!!!!!!!!!!x!!!!!x             xx   =    xxx     =       x",
    "x                   x!!!!!!!!!!!x!!!!!x           o xx!!!!!!!!!!!!!!!!!!!!!!!!x",
    "x @                 x!!!!!!!!!!!x!!!!!x    =      xxxx!!!!!!!!!!!!!!!!!!!!!!!!x",
    "xxx                 x!!!!!!!!!!!x!!!!!x!!!!!!!xxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!x",
    "xc      x      c    x!!!!!!!!!!!x!!!!!x!!!!!!!x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x",
    "x!!!!!!xxx!!!!!!!!!!xxxxxxxxxxxxx!!!!!xxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x",
    "x!!!!!xxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x",
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],
    ["x                                                                             x",
     "                                                                               ",
     "                                                                               ",
     "                                                                               ",
     "                                                                               ",
     "                                                                               ",
     "                                                                               ",
     "                                                                               ",
     "                                                                               ",
     "                                                                               ",
     "                                                                               ",
     "                                                                               ",
     "x                                                                             x",
     "x                                                                             x",
     "x                                                                             x",
     "x                                                                             x",
     "x                                                                             x",
     "x                                                                             x",
     "x                             o                                               x",
     "x   x!!!!!!!x                    x!!!x                                        x",
     "x   x!!!!!!!x                    x!!!x                                        x",
     "x   x!!!!!!!x                     xvx                                         x",
     "x   xvxxvxxvx                                                                 x",
     "x                          x               x                                  x",
     "x                          x o             x                                  x",
     "x                          x               x                                  x",
     "x                          xxxx            x                                  x",
     "x                                        o x                   =              x",
     "x                                          x                                  x",
     "x       x       =xxxx=    =xxxx=     xx  xxx                  =               x",
     "x            f                                                                x",
     "x                               x     x                      =             xxxx",
     "x                               x!!!!!x             xx                        x",
     "x               xxxxx           x!!!!!x             xx         o            k x",
     "x         f         x!!!!!!!!!!!x!!!!!x             xx   =    xxx     =  xxxxxx",
     "x                   x!!!!!!!!!!!x!!!!!x             xx                        x",
     "x       o       |   x!!!!!!!!!!!x!!!!!x           xxxx  c   x       x    c    x",
     "x                   x!!!!!!!!!!!x!!!!!x       xxxxx!!xxxxxxxx   =   xxxxxxxxxxx",
     "x       @           x!!!!!!!!!!!x!!!!!x c c c x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x",
     "x!!!!!!xxx!!!!!!!!!!xxxxxxxxxxxxx!!!!!xxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x",
     "x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x",
     "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],
     ["x                                     x",
      "x                                     x",
      "x                                     x",
      "x                                     x",
      "x                                     x",
      "x                                     x",
      "x                                     x",
      "x                                     x",
      "x                                     x",
      "x       x   x   xxxxxx   x    x       x",
      "x        x x    xffffx   x    x       x",
      "x         x     xffffx   x    x       x",
      "x         x     xxxxxx   xxxxxx       x",
      "x                                     x",
      "x                    @                x",
      "x     x           x  x   xx   x       x",
      "x      x    x    x   x   x x  x       x",
      "x       x  x x  x    x   x  x x       x",
      "x        xx   xx     x   x   xx       x",
      "x                                     x",
      "x                                     x",
      "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
