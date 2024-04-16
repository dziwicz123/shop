package com.example.shop.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "addresses")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class Address {
    @Id
    @Column(name = "address_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String miasto;
    private String ulica;
    @Column(name = "kod_pocztowy")
    private String kodPocztowy;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
