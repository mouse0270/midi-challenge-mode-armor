# Midi QOL - Challenge Mode Armor Display
This module allows you to see the Armor Class, Evasion Class and Armor Resistance on the actor sheet when using Midi QOL Optional Setting `Challenge Mode Armor`.

![image](https://user-images.githubusercontent.com/564874/152419970-d9bc3e5e-a7af-46fc-b2d0-fb22faf0fe28.png)

## What is Challenge Mode Armor Class?
***Note** Most of this information is take from Midi QOL Readme*

Implements the Challenge Mode AC rules, characters have an Evasion Class (EC) and an Armor Resistance (AR). In the base mode your EC is 10 + the dex mod applied to your AC (based on armor type used) + any shield AC you have.

Your AR is equal to your AC - applied dex mod, i.e. the part of your AC that is not nimbleness. This means that tanks, high armor class but weighed down take more glancing damage, but that damage is mitigated by your AR. The logic of the system is that part of hitting is having the blow land  on the target, which is measured by the EC which rewards nimble characters and secondly damage reduction done when a glancing blow does not get "through the armor" and so the damage is reduced by the Armor Resistance.

For example, if an attack roll:
- Is less than your EC, then the attack misses
- Is greater than or equal to your EC and less than or equal to your AC, it is a hit, but it did not penetrate your armor, so the damage you take is reduced by your armor resistance.
- Is greater than your AC, then the attack hits normally.

> Some informal testing suggests this is badly weighted against tank classes once they reach a high enough level to be fighting tough opponents doing high levels of damage, since many of the EC hits will get through the AR but there is no compensation for taking this extra damage.
