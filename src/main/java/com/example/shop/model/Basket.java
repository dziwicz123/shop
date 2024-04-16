package com.example.shop.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "baskets")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class Basket {
    @Id
    @Column(name = "basket_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private Boolean state;

    @Column(name = "total_price")
    private Float totalPrice;
}
