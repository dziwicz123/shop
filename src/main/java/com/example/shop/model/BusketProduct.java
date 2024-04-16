package com.example.shop.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "busket_product")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class BusketProduct {
    @Id
    @Column(name = "busket_product_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
}
